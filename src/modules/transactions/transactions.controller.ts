import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionDTO } from './transactions.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() data: TransactionDTO) {
    return this.transactionsService.create(data);
  }

  @Get()
  async findAll() {
    return this.transactionsService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: TransactionDTO) {
    return this.transactionsService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.transactionsService.delete(id);
  }
}
