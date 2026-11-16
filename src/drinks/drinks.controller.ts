import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DrinksService } from './drinks.service.js';
import { CreateDrinkDto } from './dto/create-drink.dto.js';
import { UpdateDrinkDto } from './dto/update-drink.dto.js';
import { NotFoundError } from 'rxjs';

@Controller('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Post()
  async create(@Body() createDrinkDto: CreateDrinkDto) {
    try{
      return await this.drinksService.create(createDrinkDto);
    }catch{
      throw new NotFoundException("Nincs ilyen ID öcskös, bátyaburger, Fortnite burger")
    }
  }

  @Get()
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      return await this.drinksService.findOne(+id);

    }catch{
      throw new NotFoundException("Nincs ilyen ID öcskös, bátyaburger, Fortnite burger")
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateDrinkDto: UpdateDrinkDto) {
    try{
      return await this.drinksService.update(+id, updateDrinkDto);

    }catch{
      throw new NotFoundException("Nincs ilyen ID öcskös, bátyaburger, Fortnite burger")
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.drinksService.remove(+id);

    }catch{
      throw new NotFoundException("Nincs ilyen ID öcskös, bátyaburger, Fortnite burger")
    }
  }
}
