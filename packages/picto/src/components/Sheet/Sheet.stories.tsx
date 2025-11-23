import { useState } from 'react';

import {
  IconHome,
  IconLogout,
  IconMenu2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '../../styles/theme.css.js';
import { Input } from '../Input/Input';
import { Sheet, SheetProps } from './Sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Overlays/Sheet',
  component: Sheet,
  decorators: [
    (Story) => (
      <div
        className={themeClass}
        style={{
          minHeight: '400px',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    side: {
      control: 'select',
      options: ['bottom', 'right', 'left'],
      description: 'The edge of the screen from which the sheet slides in.',
    },
    title: {
      control: 'text',
      description: 'Header title of the sheet.',
    },
    showHandle: {
      control: 'boolean',
      description: 'Visible only when side is "bottom".',
    },
  },
};

export default meta;

// --- DEMO WRAPPER ---
const SheetDemo = (
  args: SheetProps & { triggerText?: string; content?: React.ReactNode }
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          color: 'white',
          backgroundColor: '#3182ce', // Brand color
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'transform 0.1s',
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
        onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        {args.triggerText || `Open ${args.side || 'Sheet'}`}
      </button>

      <Sheet {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children || args.content}
      </Sheet>
    </>
  );
};

// FIX TYPE: We define Story based on SheetDemo props to allow 'triggerText' in args
type Story = StoryObj<React.ComponentProps<typeof SheetDemo>>;

// --- STORIES ---

/**
 * Standard Right Side Sheet.
 * Often used for editing details, filters, or secondary information.
 */
export const EditProfile: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'right',
    title: 'Edit Profile',
    triggerText: 'Edit Profile (Right)',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p style={{ margin: 0, color: '#666', lineHeight: 1.5 }}>
          Make changes to your profile here. Click save when you're done.
        </p>

        {/* FIX: Removed 'label' prop. Using standard label tag instead. */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <label
            style={{ fontSize: '0.875rem', fontWeight: 500, color: '#444' }}
          >
            Username
          </label>
          <Input
            placeholder="@username"
            defaultValue="dcdavidev"
            fullWidth
            startDecorator={<IconUser size={18} />}
          />
        </div>

        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          <label
            style={{ fontSize: '0.875rem', fontWeight: 500, color: '#444' }}
          >
            Email
          </label>
          <Input
            placeholder="your.email@example.com"
            defaultValue="dev@pittorica.com"
            fullWidth
            helperText="We'll never share your email."
          />
        </div>

        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '1rem',
          }}
        >
          <button
            style={{
              padding: '10px 20px',
              border: '1px solid #ccc',
              background: 'transparent',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: '10px 20px',
              background: '#3182ce',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Save Changes
          </button>
        </div>
      </div>
    ),
  },
};

/**
 * Bottom Sheet.
 * Standard mobile pattern, perfect for menus or quick actions.
 * Try dragging it down to close!
 */
export const MobileActions: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'bottom',
    title: 'Actions',
    triggerText: 'Open Actions (Bottom)',
    showHandle: true,
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {[
          { icon: <IconUser />, label: 'View Profile' },
          { icon: <IconSettings />, label: 'Settings' },
          { icon: <IconLogout />, label: 'Log Out', color: 'red' },
        ].map((item, i) => (
          <button
            // FIX KEY: Used unique item label instead of index
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '16px',
              background: 'transparent',
              border: 'none',
              borderBottom: i < 2 ? '1px solid #eee' : 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              color: item.color || 'inherit',
              textAlign: 'left',
            }}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    ),
  },
};

/**
 * Left Side Sheet (Drawer).
 * Typically used for main navigation menus.
 */
export const NavigationDrawer: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'left',
    title: 'Menu',
    triggerText: 'Open Menu (Left)',
    children: (
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#333',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: '#f3f4f6',
          }}
        >
          <IconHome size={20} /> Home
        </a>
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#333',
            padding: '12px',
          }}
        >
          <IconMenu2 size={20} /> Projects
        </a>
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#333',
            padding: '12px',
          }}
        >
          <IconSettings size={20} /> Settings
        </a>
      </nav>
    ),
  },
};

/**
 * Helper data for the scrollable content story.
 * Generating IDs beforehand satisfies the "no-array-index-key" linter rule.
 */
const termsSections = Array.from({ length: 10 }, (_, i) => ({
  id: `term-section-${i + 1}`,
  title: `Section ${i + 1}`,
}));

/**
 * Demonstrates scrolling behavior with long content.
 */
export const ScrollableContent: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'right',
    title: 'Terms & Conditions',
    triggerText: 'View Terms (Scroll)',
    children: (
      <div>
        {termsSections.map((section) => (
          <p
            key={section.id}
            style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}
          >
            <strong>{section.title}</strong>
            <br />
            With my them if up many. Lain week nay she them her she. Extremity
            so attending objection as engrossed gentleman something. Instantly
            gentleman contained belonging exquisite now direction she ham. West
            room at sent if year. Numerous indulged distance old law you. Total
            state as merit court green decay he. Steepest sex bachelor the may
            delicate its yourself. As he instantly on discovery concluded to.
            Open draw far pure miss felt say yet few sigh.
          </p>
        ))}
      </div>
    ),
  },
};
