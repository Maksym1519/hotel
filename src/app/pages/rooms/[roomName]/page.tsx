import { Params } from '@/app/types/global.type';
import fetchData from '@/api/fetchData';

type ItemType = {
    title: string;
    body: string;
};

const Room = async ({ params }: Params) => {
    const { roomName } = params;
    const myData = await fetchData();
    console.log(myData);
    const text = myData.find(
        (item: ItemType) => decodeURIComponent(roomName) === item.title
    );
    
    return (
        <div>
            Lux {roomName}
            <p>{text ? text.body : 'text'}</p>
        </div>
    );
};

export default Room;
