interface GenerateRandomNumberFromIntervalArgs {
   max: number;
   min: number;
}

export function generateRandomNumberFromInterval({ max, min }: GenerateRandomNumberFromIntervalArgs): number {
   return Math.floor(Math.random() * (max - min + 1) + min);
}
