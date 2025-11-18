import React from 'react';

import { ColorToken } from '../../types/colors.js';
import { Container } from '../Container/Container.js';
import { Surface } from '../Surface/Surface.js';
import { Typography } from '../Typography/Typography.js';

export interface BlockquoteProps {
  author?: string;
  source?: string;
  color?: ColorToken | undefined;
  children: React.ReactNode;
}

function parseTextContent(content: React.ReactNode): React.ReactNode {
  if (typeof content !== 'string') {
    return content;
  }

  // Replace \n with <br />
  const parsedContent = content.replaceAll('\n', '<br />');

  // Transform HTML elements to Typography components
  // This is a simple approach - for more complex HTML, consider using html-react-parser
  const transformHtml = (html: string): React.ReactNode => {
    // Split by HTML tags and process each part
    const parts = html.split(/(<[^>]+>)/g);

    return parts.map((part, index) => {
      const key = `${part}-${index}`;

      if (part.startsWith('<span>') && part.endsWith('</span>')) {
        const innerText = part.slice(6, -7); // Remove <span> and </span>
        return <Typography key={key}>{innerText}</Typography>;
      }

      if (part.startsWith('<b>') && part.endsWith('</b>')) {
        const innerText = part.slice(3, -4); // Remove <b> and </b>
        return (
          <Typography key={key} weight="bold">
            {innerText}
          </Typography>
        );
      }

      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        const innerText = part.slice(8, -9); // Remove <strong> and </strong>
        return (
          <Typography key={key} weight="bold">
            {innerText}
          </Typography>
        );
      }

      if (part.startsWith('<i>') && part.endsWith('</i>')) {
        const innerText = part.slice(3, -4); // Remove <i> and </i>
        return (
          <Typography key={key} italic>
            {innerText}
          </Typography>
        );
      }

      if (part.startsWith('<em>') && part.endsWith('</em>')) {
        const innerText = part.slice(4, -5); // Remove <em> and </em>
        return (
          <Typography key={key} italic>
            {innerText}
          </Typography>
        );
      }

      if (part === '<br />') {
        return <br key={key} />;
      }

      // Return plain text as is
      return part;
    });
  };

  return transformHtml(parsedContent);
}

export function Blockquote({
  author,
  source,
  color,
  children,
}: BlockquoteProps) {
  const parsedChildren = parseTextContent(children);

  return (
    <Container size="xs">
      <Surface shape="square" color={color} style={{ padding: '1rem 0' }}>
        <blockquote>
          <Typography size="body-lg" italic>
            {parsedChildren}
          </Typography>
          {(author || source) && (
            <Typography
              size="body-md"
              align="right"
              style={{ marginTop: '0.5rem', fontStyle: 'normal' }}
            >
              — {author}
              {source && author && ', '}
              {source}
            </Typography>
          )}
        </blockquote>
      </Surface>
    </Container>
  );
}
