export namespace MaiUI {
    /**
     * @default "default"
     */
    export type ButtonColor = 'danger' | 'default' | 'primary' | 'secondary' | 'success' | 'warning';

    /**
     * @default "solid"
     */
    export type ButtonVariant = 'bordered' | 'faded' | 'ghost' | 'flat' | 'light' | 'shadow' | 'solid'; 

    /**
     * @default "foreground"
     */
    export type LinkColor = 'foreground' | 'danger' | 'primary' | 'secondary' | 'success' | 'warning';

    
  export type Theme = 'dark' | 'light';

  export type ThemeState = {
    isDark:   boolean;
    isSystem: boolean;
  };
  
  export type ThemeContextProps = {
    theme: ThemeState;
    updateTheme:          (theme: ThemeState) => void;
    updateThemeBySystem:  (isDark: boolean) => void;
    updateThemeByUser:    (isDark: boolean) => void;
  };
};
