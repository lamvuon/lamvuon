import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { LamVuonShopInfo } from '@/auth/sign-in-up/components/LamVuonShopInfo';
import { ComponentDecorator } from '~/testing/decorators/ComponentDecorator';

const meta: { title: string; component: () => JSX.Element; decorators: any[] } = {
  title: 'Modules/Auth/LamVuonShopInfo',
  component: LamVuonShopInfo,
  decorators: [ComponentDecorator],
};

export default meta;

type Story = StoryObj<typeof LamVuonShopInfo>;

export const Default: { play: ({ canvasElement }: { canvasElement: any }) => Promise<void> } = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Add any interactions here if needed
  },
};

