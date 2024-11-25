import { Params } from '@/app/types/global.type';

const Room = ({ params }: Params) => {
    const { roomName } = params;
    return <div>Lux {roomName}</div>;
};

export default Room;
