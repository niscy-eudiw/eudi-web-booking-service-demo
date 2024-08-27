import { bookingCreateUserInputSchema } from "@/schemas";
import type { BookingDto } from "@/shared";
import { Booking } from "@prisma/client";
import { Inject, Service } from "typedi";
import { ValidateInput } from "../decorators";
import { BookingRepository } from "../repositories";
import { MapperService } from "./MapperService";
import { VerifierService } from "./VerifierService";

@Service()
export class BookingService {
  constructor(
    @Inject() private readonly bookingRepository: BookingRepository,
    @Inject() private mapper: MapperService,
    @Inject() private verifier: VerifierService
  ) {}

  async findAll(): Promise<BookingDto[]> {
    const records = await this.bookingRepository.findAll();

    const mappedData = records.map((record) =>
      this.mapper
        .get()
        .map<Booking, BookingDto>(record, "Booking", "BookingDto")
    );

    return mappedData;
  }

  @ValidateInput(bookingCreateUserInputSchema)
  async create(request: BookingDto): Promise<string> {
    console.log(request);
    const verificationData = await this.verifier.initVerification();
    //TODO if desktop 
    request.crossDeviceTransactionId = verificationData.presentationId;
    //TODO if mobile 
    //request.sameDeviceTransactionId = verificationData.presentationId;
    const data = this.mapper
      .get()
      .map<BookingDto, Booking>(request, "BookingDto", "Booking"); 
      
    const dbRecord = await this.bookingRepository.create(data);
    console.log(dbRecord);
    //TODO error handling {statusCode, message}
    return verificationData.requestUri;
  }

  
}
