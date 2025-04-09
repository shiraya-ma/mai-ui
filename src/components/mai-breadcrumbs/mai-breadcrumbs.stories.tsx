'use strict';
import { Meta, StoryFn } from '@storybook/react';
import { MaiBreadcrumbs } from './mai-breadcrumbs';
import { MaiBreadcrumbItem } from './mai-breadcrumb-item';

const meta: Meta<typeof MaiBreadcrumbs> = {
  title: 'Components/MaiBreadcrumbs',
  component: MaiBreadcrumbs,
  subcomponents: {
    MaiBreadcrumbItem,
  },
  argTypes: {
    variant: {
      control: {type: 'radio'},
      options: ['solid', 'bordered', 'light', 'glassy'],
      table: {
        defaultValue: {
          summary: 'light',
        },
      },
    },
    color: {
      control: {type: 'radio'},
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'foreground'],
      table: {
        defaultValue: {
          summary: 'foreground',
        },
      },
    },
    size: {
      control: {type: 'radio'},
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: {
          summary: 'md',
        },
      },
    },
    radius: {
      control: {type: 'radio'},
      options: ['none', 'sm', 'md', 'lg', 'full'],
      table: {
        defaultValue: {
          summary: 'sm',
        },
      },
    },
    underline: {
      control: {type: 'radio'},
      options: ['none', 'active', 'hover', 'focus', 'always'],
      table: {
        defaultValue: {
          summary: 'none',
        },
      },
    },
  },
  tags: [
    'test',
  ],
};
export default meta;

type TemplateProps = MaiBreadcrumbs.Props & {itemProps?: MaiBreadcrumbItem.Props[]};

const Template: StoryFn<TemplateProps> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { children: _, itemProps, ...breadCrumbsProps } = args;

  return (
    <MaiBreadcrumbs
      {...breadCrumbsProps}
    >
      {itemProps && itemProps.map((item, key) => (
        <MaiBreadcrumbItem 
          {...item}
          key={`mai-breadcrumb-item-${key}`}
        />
      ))}
    </MaiBreadcrumbs>
  );
};

const itemProps = [
  { href: '#', children: 'hoge' },
  { href: '#', children: 'fuga' },
  { href: '#', children: 'piyo' },
];

export const Default = Template.bind({});
Default.args = {
  homeRef: '#',
  showHomeIcon: true,
  itemProps,
};

export const Disabled = Template.bind({});
Disabled.args = {
  homeRef: '#',
  showHomeIcon: true,
  itemProps,
  isDisabled: true,
};

export const Sizes = (args: TemplateProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { itemProps: _, ...props } = args;
  return (
    <div className='flex flex-col gap-2'>
      {meta.argTypes!.size!.options!.map(size => (
        <MaiBreadcrumbs
          {...props}
          size={size}
          key={`mai-breadcrumb-size-${size}`}
        >
          {itemProps && itemProps.map((item, key) => (
            <MaiBreadcrumbItem 
              {...item}
              key={`mai-breadcrumb-size-${size}-item-${key}`}
            />
          ))}
        </MaiBreadcrumbs>
      ))}
    </div>
  );
};

export const Colors = (args: TemplateProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { itemProps: _, ...props } = args;
  return (
    <div className='flex flex-col gap-2'>
      {meta.argTypes!.color!.options!.map(color => (
        <MaiBreadcrumbs
          {...props}
          color={color}
          key={`mai-breadcrumb-color-${color}`}
        >
          {itemProps && itemProps.map((item, key) => (
            <MaiBreadcrumbItem 
              {...item}
              key={`mai-breadcrumb-color-${color}-item-${key}`}
            />
          ))}
        </MaiBreadcrumbs>
      ))}
    </div>
  );
};

export const Variants = (args: TemplateProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { itemProps: _, ...props } = args;
  return (
    <div className='flex flex-col gap-2'>
      {meta.argTypes!.variant!.options!.map(variant => (
        <MaiBreadcrumbs
          {...props}
          variant={variant}
          key={`mai-breadcrumb-variant-${variant}`}
        >
          {itemProps && itemProps.map((item, key) => (
            <MaiBreadcrumbItem 
              {...item}
              key={`mai-breadcrumb-variant-${variant}-item-${key}`}
            />
          ))}
        </MaiBreadcrumbs>
      ))}
    </div>
  );
};

export const Underlines = (args: TemplateProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { itemProps: _, ...props } = args;
  return (
    <div className='flex flex-col gap-4'>
      {meta.argTypes!.underline!.options!.map(underline => (
        <div className='flex flex-col gap-2'>
          <p>underline: {underline}</p>
          <MaiBreadcrumbs
            {...props}
            underline={underline}
            key={`mai-breadcrumb-underline-${underline}`}
          >
            {itemProps && itemProps.map((item, key) => (
              <MaiBreadcrumbItem 
                {...item}
                key={`mai-breadcrumb-underline-${underline}-item-${key}`}
              />
            ))}
          </MaiBreadcrumbs>
        </div>
      ))}
    </div>
  );
};

export const Radius = (args: TemplateProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { itemProps: _, variant: userVariant, ...props } = args;
  return (
    <div className='flex flex-col gap-2'>
      {meta.argTypes!.radius!.options!.map(radius => (
        <MaiBreadcrumbs
          {...props}
          variant={userVariant || 'bordered'}
          radius={radius}
          key={`mai-breadcrumb-radius-${radius}`}
        >
          {itemProps && itemProps.map((item, key) => (
            <MaiBreadcrumbItem 
              {...item}
              key={`mai-breadcrumb-radius-${radius}-item-${key}`}
            />
          ))}
        </MaiBreadcrumbs>
      ))}
    </div>
  );
};
