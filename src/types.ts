/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CardTheme = 'classic' | 'midnight' | 'light' | 'clean-mint';

export interface BusinessCardProps {
  theme?: CardTheme;
}
