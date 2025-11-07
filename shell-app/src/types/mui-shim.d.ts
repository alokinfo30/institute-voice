// Minimal type shims for @mui/material used during tests to avoid version/type conflicts
declare module '@mui/material' {
  import { ComponentType } from 'react';
  export const Grid: ComponentType<any>;
  export const Box: ComponentType<any>;
  export const Card: ComponentType<any>;
  export const CardContent: ComponentType<any>;
  export const Typography: ComponentType<any>;
  export const LinearProgress: ComponentType<any>;
  export const Chip: ComponentType<any>;
  export const Button: ComponentType<any>;
  export const Paper: ComponentType<any>;
  export const TextField: ComponentType<any>;
  export const Container: ComponentType<any>;
  export const CircularProgress: ComponentType<any>;
  export const Breadcrumbs: ComponentType<any>;
  export const Link: ComponentType<any>;
  export const Dialog: ComponentType<any>;
  export const DialogTitle: ComponentType<any>;
  export const DialogContent: ComponentType<any>;
  export const DialogContentText: ComponentType<any>;
  export const DialogActions: ComponentType<any>;
  const _default: any;
  export default _default;
}

declare module '@mui/icons-material' {
  import { ComponentType } from 'react';
  export const School: ComponentType<any>;
  export const VideoLibrary: ComponentType<any>;
  export const Analytics: ComponentType<any>;
  export const LiveHelp: ComponentType<any>;
  export const TrendingUp: ComponentType<any>;
  export const People: ComponentType<any>;
  const _default: any;
  export default _default;
}
