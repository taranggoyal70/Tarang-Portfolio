declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: any, vars?: any);
    revert(): void;
    split(vars?: any): SplitText;
    chars: any[];
    words: any[];
    lines: any[];
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
