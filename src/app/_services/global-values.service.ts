import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class GlobalValuesService {
  //public location: Observable<any>;
  private location: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { 
    this.setLocation({ latitude: '', longitude: '', cityId:'', cityName:''});
  }

  setLocation(location:object){
    this.location.next(location);
  }
  getLocation(){
    return this.location;
  }
  prepareTimes(data){
    let times=[];
    var slotTime = moment(data.startTime, "HH:mm");
    var endTime = moment(data.endTime, "HH:mm");

    function isInBreak(slotTime, breakTimes) {
        return breakTimes.some((br) => {
          return slotTime >= moment(br[0], "HH:mm a") && slotTime < moment(br[1], "HH:mm a");
      });
    }
  
  
  while (slotTime < endTime)
  {
    if (!isInBreak(slotTime, data.breakTime)) {
      let slotObj= {
        "time": slotTime.format("HH:mm a"),
        "allocated":false
      }
       times.push(slotObj);
    }
    slotTime = slotTime.add(data.nextSlot, 'minutes');
  }
  //{"date":"07-09-2021", "slots": [{"time":"09:00 AM","allocated":true}, {"time":"10:00 AM","allocated":false},{"time":"11:00 AM","allocated":false},{"time":"12:00 AM","allocated":false},{"time":"13:00 AM","allocated":false},{"time":"09:00 AM","allocated":false}]}
  return times;
  }
  getTimeSlots(data){
     data = {
      nextSlot: 30,
      breakTime: [
          ['11:00', '14:00'], ['16:00', '18:00']
      ],
      startTime: '8:00',
      endTime: '20:00'
  };
  let times = this.prepareTimes(data)
    let timeSlots = [];
    timeSlots.push({
      "date": moment().format("DD-MM-YYYY"),
      "slots": times
    });
      for(let i=0;i<14;i++){
        timeSlots.push({
          "date": moment(moment(timeSlots[i].date, "DD-MM-YYYY").add(1,'days')).format("DD-MM-YYYY"),
          "slots": times
        });
      }
      console.log(JSON.stringify(timeSlots));
      return timeSlots;
  }
  

}
