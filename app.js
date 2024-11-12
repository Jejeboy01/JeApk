
document.getElementById('jadwalForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let hari = document.getElementById('hari').value;
    let kegiatan = document.getElementById('kegiatan').value;
    let jam = document.getElementById('jam').value;
    let jadwalList = document.getElementById('jadwalList');

    // Menambahkan jadwal ke dalam daftar
    let li = document.createElement('li');
    li.textContent = `${hari} - ${kegiatan} pada pukul ${jam}`;
    jadwalList.appendChild(li);

    // Menambahkan alarm
    let waktuAlarm = new Date();
    let [hour, minute] = jam.split(':');
    waktuAlarm.setHours(hour, minute, 0);

    if (waktuAlarm > new Date()) {
        let timeout = waktuAlarm - new Date();
        setTimeout(() => {
            alert(`Waktunya untuk: ${kegiatan}`);
        }, timeout);
    }

    // Reset form
    document.getElementById('jadwalForm').reset();
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.display = 'none';
});
    