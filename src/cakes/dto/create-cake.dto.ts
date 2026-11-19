import { IsDate, IsDateString, IsInt, IsNotEmpty, IsPositive, Matches, Max, Min } from "class-validator"

export class CreateCakeDto {
    @IsNotEmpty({message:'A név nem lehet üres'})
    @Matches(/^[a-z]+$/,{message: 'A név csak angol kisbetűs lehet'})
    name: string

    @IsInt({message:'Az árnak számnak kell lennie'})
    @IsPositive({message:'Az árnak pozitívnak kell lennie'})
    price: number

    @IsInt({message: 'A méret számnak kell lennie'})
    @Min(5,{message:'A méret 5-nél nagyobbnak kell lennie'})
    @Max(50,{message: 'A méret 50-nél kisebb kell lennie'})
    size:number

    @IsDateString()
    endDate: string; 
}
