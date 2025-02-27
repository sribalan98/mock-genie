import '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface ColorSystem {
    main: {
      MainBgGradient: string;
      MainBgColor: string;
      MainTextColor: string;
    };
    square: {
      squareBgColor: string;
      squareTextColor: string;
    };
  }
}

export interface ConfigurationSelectOption {
  option: string[];
}

export interface CodeHighlighterProps {
  code: string;
}

// interface FakerUser {}
