'use strict';
import { Meta, StoryFn } from '@storybook/react';

import { MaiPagination } from './mai-pagination';

const meta: Meta<typeof MaiPagination> = {
  title: 'Components/MaiPagination',
  component: MaiPagination,
  argTypes: {
    variant: {
      control: {type: 'radio'},
      options: ['flat', 'bordered', 'light', 'faded', 'glassy'],
    },
    color: {
      control: {type: 'radio'},
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: {type: 'radio'},
      options: ['sm', 'md', 'lg'],
    },
    radius: {
      control: {type: 'radio'},
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    total: {
      control: {type: 'number'},
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
    dotsJump: {
      control: {type: 'number'},
      table: {
        defaultValue: {
          summary: '5',
        },
      },
    },
    initialPage: {
      control: {type: 'number'},
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
    page: {
      control: {type: 'number'},
    },
    siblings: {
      control: {type: 'number'},
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
    boundaries: {
      control: {type: 'number'},
      table: {
        defaultValue: {
          summary: '1',
        },
      },
    },
    loop: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
    isCompact: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
    isDisabled: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
    showShadow: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
    showControls: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
    disableCursorAnimation: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
    disableAnimation: {
      control: {type: 'radio'},
      options: ['true', 'false'],
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

const Template: StoryFn<MaiPagination.Props> = (args) => <MaiPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialPage: 1,
  total: 10,
};

export const Disabled = Template.bind({});
Disabled.args = {
  initialPage: 1,
  total: 10,
  isDisabled: true,
};

export const Sized = (args: MaiPagination.Props) => {
  const { total, ...props } = args;

  return (
    <div className='flex flex-col gap-2'>
      {meta!.argTypes!.size!.options!.map(size => (
        <MaiPagination
          initialPage={1}
          total={total ?? 10}
          {...props}
          size={size}
          key={`size-${size}`}
        />
      ))}
    </div>
  );
};

export const Colors = (args: MaiPagination.Props) => {
  const { total, ...props } = args;

  return (
    <div className='flex flex-col gap-2'>
      {meta!.argTypes!.color!.options!.map(color => (
        <MaiPagination
          initialPage={1}
          total={total ?? 10}
          {...props}
          color={color}
          key={`color-${color}`}
        />
      ))}
    </div>
  );
};

export const Variants = (args: MaiPagination.Props) => {
  const { total, ...props } = args;

  return (
    <div className='flex flex-col gap-2'>
      {meta!.argTypes!.variant!.options!.map(variant => (
        <MaiPagination
          initialPage={1}
          total={total ?? 10}
          {...props}
          variant={variant}
          key={`variant-${variant}`}
        />
      ))}
    </div>
  );
};

export const WithControls = Template.bind({});
WithControls.args = {
  initialPage: 1,
  total: 10,
  showControls: true,
};

export const Compact = Template.bind({});
Compact.args = {
  initialPage: 1,
  total: 10,
  isCompact: true,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  initialPage: 1,
  total: 10,
  showShadow: true,
};
