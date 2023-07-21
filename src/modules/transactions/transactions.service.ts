import { Injectable } from '@nestjs/common';
import { TransactionDTO } from './transactions.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: TransactionDTO) {
    const transaction = await this.prisma.transaction.create({
      data,
    });

    return transaction;
  }

  async findAll() {
    return await this.prisma.transaction.findMany();
  }

  async update(id: string, data: TransactionDTO) {
    const transactionToUpdate = await this.prisma.transaction.findFirst({
      where: {
        id,
      },
    });

    if (!transactionToUpdate) {
      throw new Error('This transactions does not exist');
    }
    return await this.prisma.transaction.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const transactionToDelete = await this.prisma.transaction.findFirst({
      where: {
        id,
      },
    });

    if (!transactionToDelete) {
      throw new Error('This transaction does not exist');
    }
    return await this.prisma.transaction.delete({
      where: {
        id,
      },
    });
  }
}
