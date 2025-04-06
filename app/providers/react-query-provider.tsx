"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme as antdTheme } from "antd";
import { ReactNode } from "react";
import { useThemeStore } from "../store/theme";

interface ReactQueryProviderProps {
  children: ReactNode;
}

export default function ReactQueryProvider({
  children,
}: ReactQueryProviderProps) {
  const queryClient = new QueryClient();
  const { theme } = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          algorithm:
            theme === 'dark'
              ? antdTheme.darkAlgorithm
              : antdTheme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </QueryClientProvider>
  );
}
