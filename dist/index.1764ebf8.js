const e=document.getElementById("join");e.addEventListener("click",function(){let e=document.getElementById("room-name").value;if(""===e){alert("Fill room name");return}let t=prompt("Enter secret-key");window.location.href="./pub/?room="+e+"&key="+t});
//# sourceMappingURL=index.1764ebf8.js.map
