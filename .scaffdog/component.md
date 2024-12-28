---
name: 'component'
root: '.'
output: 'src/**/*'
questions:
  name: 'Please enter a component name.'
  children:
    confirm: 'Do you need a children prop?'
    initial: false
  story:
    confirm: 'Do you need a story?'
    initial: true
---

# `{{ inputs.name | pascal }}/index.ts`

```typescript
export * from './{{ inputs.name | pascal }}';
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
{{ if inputs.children }}
import { PropsWithChildren } from 'react';
{{ end }}
export type {{ inputs.name | pascal }}Props = {{ if inputs.children }}PropsWithChildren<{}>{{ else }}{}{{ end }};

export function {{ inputs.name | pascal }}({ {{ if inputs.children }}children{{ end }} }: {{ inputs.name | pascal }}Props ) {
  return <div>{{ if inputs.children }}{children}{{ end }}</div>;
};
```

# `{{ !inputs.story && '!' }}{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react';

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}';

const meta = {
  title: '{{ inputs.name | pascal }}',
  component: { {{ inputs.name | pascal }} },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
```
