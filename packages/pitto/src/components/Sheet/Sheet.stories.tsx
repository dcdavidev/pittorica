import { useState } from 'react';

import {
  IconHome,
  IconLogout,
  IconMenu2,
  IconSettings,
  IconUser,
} from '@tabler/icons-react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../../../pitto/src/components/Input/Input.js';
import { Button } from '../Button/Button.jsx';
import { Stack } from '../Stack/Stack.jsx';
import { Sheet, type SheetProps } from './Sheet';

const meta: Meta<typeof Sheet> = {
  title: 'Overlays/Sheet',
  component: Sheet,
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
    color: {
      control: 'color',
      description: 'Custom background color override.',
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

type Story = StoryObj<React.ComponentProps<typeof SheetDemo>>;

// --- STORIES ---

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

export const NavigationDrawer: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'left',
    title: 'Menu',
    triggerText: 'Open Menu (Left)',
    children: (
      <Stack direction="vertical" gap="large">
        <Button
          fullWidth
          variant="text"
          startDecorator={<IconHome />}
          style={{ justifyContent: 'flex-start' }}
          color="black"
        >
          Home
        </Button>
        <Button
          fullWidth
          variant="text"
          startDecorator={<IconMenu2 />}
          style={{ justifyContent: 'flex-start' }}
        >
          Projects
        </Button>
        <Button
          fullWidth
          variant="text"
          startDecorator={<IconSettings />}
          style={{ justifyContent: 'flex-start' }}
        >
          Settings
        </Button>
        <Button
          fullWidth
          variant="text"
          startDecorator={<IconLogout />}
          style={{ justifyContent: 'flex-start' }}
        >
          Log Out
        </Button>
      </Stack>
    ),
  },
};

const termsSections = Array.from({ length: 10 }, (_, i) => ({
  id: `term-section-${i + 1}`,
  title: `Section ${i + 1}`,
}));

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

export const CenteredBottomSheet: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'bottom',
    maxWidth: 'medium',
    title: 'Centered Actions',
    triggerText: 'Open Centered Sheet',
    showHandle: true,
    children: (
      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <p>This sheet will not stretch to the full edges on a large monitor.</p>
        <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
          <Input placeholder="Example Input" fullWidth />
          <button
            style={{
              padding: '12px',
              background: '#3182ce',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
            }}
          >
            Confirm Action
          </button>
        </div>
      </div>
    ),
  },
};

/**
 * Demonstrates custom background color override.
 * Useful for dark themes or brand-specific sheets.
 */
export const ColoredSheet: Story = {
  render: (args) => <SheetDemo {...args} />,
  args: {
    side: 'right',
    title: 'Dark',
    color: '#1a202c', // Custom dark blue background
    textColor: '#e2e8f0', // Custom light text color
    triggerText: 'Open Dark Sheet',
    children: (
      <div style={{ color: '#e2e8f0' }}>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.6 }}>
          This sheet uses a custom background color prop.
          <br />
          The text color is manually adjusted here to be visible on the dark
          background.
        </p>
        <nav
          style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
        >
          {[
            { label: 'Profile', icon: <IconUser /> },
            { label: 'Settings', icon: <IconSettings /> },
          ].map((item) => (
            <a
              key={item.label}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: 'white',
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255,255,255,0.1)',
              }}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </nav>
      </div>
    ),
  },
};
