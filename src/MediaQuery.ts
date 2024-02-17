export enum ViewPortWidth{
    $1024 = "1024",
    $768 = "768",
    $425 = "425",
    $375 = "375",
    $320 = "320"
} 

export const mediaQueryForm = (viewPortWidth: ViewPortWidth) => `@media (max-width: ${viewPortWidth}px)`