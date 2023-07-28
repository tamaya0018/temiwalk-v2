import { SkyWayRoom, SkyWayContext } from "@skyway-sdk/room";
import { getToken } from '../../js/generateToken';

const numberSpan = document.getElementById('number');

(async () => {

  const searchParams = new URLSearchParams(window.location.search);
  const roomName = searchParams.get('room');
  const key = searchParams.get('key');
  
  const context = await SkyWayContext.Create(getToken(key));
  const room = await SkyWayRoom.FindOrCreate(context, {
    type: 'p2p',
    name: roomName,
  });

  const num = room.members.length;
  console.log(num);
  numberSpan.textContent = num;

  var limit = 21;
  if (num <= limit) {
    var url = "https://43.207.203.236/sub/" + "?room=" + searchParams.get('room') + "&key=" + searchParams.get('key');
    document.location = url;
  }

})();