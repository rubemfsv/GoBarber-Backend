import { v4 } from 'uuid';
import {
  isEqual, getMonth, getYear, getDate,
} from 'date-fns';

import Appointment from '../../infra/typeorm/entities/Appointment';

import IAppointmentsRepository from '../IAppointmentsRepository';
import ICreateAppointmentDTO from '../../dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProviderDTO from '../../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllInDayFromProviderDTO from '../../dtos/IFindAllInDayFromProviderDTO';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async findByDate(
    date: Date,
    provider_id: string,
  ): Promise<Appointment | undefined> {
    // eslint-disable-next-line max-len
    const findAppointment = this.appointments.find(
      (appointment) => isEqual(appointment.date, date)
        && appointment.provider_id === provider_id,
    );

    return findAppointment;
  }

  public async findAllInMonthFromProvider({
    provider_id,
    month,
    year,
  }: IFindAllInMonthFromProviderDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(
      (appointment) => appointment.provider_id === provider_id
        && getMonth(appointment.date) + 1 === month
        && getYear(appointment.date) === year,
    );

    return appointments;
  }

  public async findAllInDayFromProvider({
    provider_id,
    day,
    month,
    year,
  }: IFindAllInDayFromProviderDTO): Promise<Appointment[]> {
    const appointments = this.appointments.filter(
      (appointment) => appointment.provider_id === provider_id
        && getDate(appointment.date) === day
        && getMonth(appointment.date) + 1 === month
        && getYear(appointment.date) === year,
    );

    return appointments;
  }

  public async create({
    provider_id,
    user_id,
    date,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, {
      id: v4(),
      date,
      provider_id,
      user_id,
    });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
