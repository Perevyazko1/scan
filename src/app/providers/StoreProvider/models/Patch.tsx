export interface Patch{
    patch: string,
    inn: number,
    limit?: number,
    startDate: string,
    endDate:string,
    tonality: string,
    maxFullness?: boolean,
    inBusinessNews?: boolean,
    onlyMainRole?: boolean,
}