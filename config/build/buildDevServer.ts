import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port, isDev } = options;
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: isDev
  };
}
