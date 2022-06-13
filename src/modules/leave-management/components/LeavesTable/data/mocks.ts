import type { TagVariant } from '~/modules/common/components/Tag/Tag';

type Status = 'accepted' | 'rejected' | 'pending';

export interface Leave {
  id: string;
  user: { id: string; fullName: string; team: string; teamColor: TagVariant; avatar?: string };
  requestType: string;
  reason: string;
  requestDate: string;
  submitDate: string;
  status: Status;
}

const mocks: Leave[] = [
  {
    id: '464566',
    user: {
      id: '1',
      fullName: 'Craig Kenter',
      team: 'Tango Team',
      teamColor: 'blue',
    },
    requestType: 'Work remotely morning',
    reason: 'Doctor appointment',
    requestDate: 'Sep 5, 2021',
    submitDate: 'Mar 14, 2021',
    status: 'pending',
  },
  {
    id: '183495',
    user: {
      id: '1',
      fullName: 'Randy Madsen',
      team: 'Picasso Team',
      teamColor: 'green',
    },
    requestType: 'Off morning',
    reason: 'Not feeling well',
    requestDate: 'Dec 14, 2021',
    submitDate: 'May 14, 2021',
    status: 'pending',
  },
  {
    id: '148125',
    user: {
      id: '1',
      fullName: 'Marilyn Aminoff',
      team: 'Hugo Team',
      teamColor: 'yellow',
    },
    requestType: 'Work remotely afternoon',
    reason: 'Preparing for my ...',
    requestDate: 'Aug 28, 2021',
    submitDate: 'Feb 17, 2021',
    status: 'accepted',
  },
  {
    id: '867394',
    user: {
      id: '1',
      fullName: 'Jakob Carder',
      team: 'Spider Team',
      teamColor: 'orange',
    },
    requestType: 'Off afternoon',
    reason: 'Dentist appointment',
    requestDate: 'Oct 27, 2021',
    submitDate: 'Jun 17, 2021',
    status: 'pending',
  },
  {
    id: '991843',
    user: {
      id: '1',
      fullName: 'Angel Bator',
      team: 'Picasso Team',
      teamColor: 'green',
    },
    requestType: 'Work remotely',
    reason: '—',
    requestDate: 'Oct 25, 2021',
    submitDate: 'May 2, 2021',
    status: 'rejected',
  },
  {
    id: '682345',
    user: {
      id: '1',
      fullName: 'Craig Westervelt',
      team: 'Ion Team',
      teamColor: 'teal',
    },
    requestType: 'Work remotely',
    reason: '—',
    requestDate: 'Jul 1, 2021',
    submitDate: 'Jan 23, 2021',
    status: 'pending',
  },
  {
    id: '183859',
    user: {
      id: '1',
      fullName: 'Erin Workman',
      team: 'Spider Team',
      teamColor: 'teal',
    },
    requestType: 'Off morning',
    reason: 'I need some time ...',
    requestDate: 'Sep 23, 2021',
    submitDate: 'Jan 21, 2021',
    status: 'accepted',
  },
  {
    id: '798987',
    user: {
      id: '1',
      fullName: 'Kadin Mango',
      team: 'Tango Team',
      teamColor: 'blue',
    },
    requestType: 'Work remotely morning',
    reason: '—',
    requestDate: 'Dec 9, 2021',
    submitDate: 'Mar 10, 2021',
    status: 'accepted',
  },
  {
    id: '123478',
    user: {
      id: '1',
      fullName: 'Kierra Saris',
      team: 'Spider Team',
      teamColor: 'orange',
    },
    requestType: 'Work remotely morning',
    reason: 'I have personal stuff',
    requestDate: 'Nov 13, 2021',
    submitDate: 'Feb 25, 2021',
    status: 'rejected',
  },
];

export default mocks;
