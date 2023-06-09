package com.a2m.controller;

import com.a2m.entities.Rooms;
import com.a2m.entities.SeatRows;
import com.a2m.entities.SeatTypes;
import com.a2m.entities.Seats;
import com.a2m.model.request.RoomRequest;
import com.a2m.model.response.DataResponse;
import com.a2m.repository.RoomsRepository;
import com.a2m.repository.SeatTypesRepository;
import com.a2m.service.RoomService;
import com.a2m.service.RowService;
import com.a2m.service.SeatService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/room")
@AllArgsConstructor
@Slf4j
public class RoomController {
    private RowService rowService;

    private RoomsRepository roomsRepository;

    private RoomService roomService;

    private SeatService seatService;

    private SeatTypesRepository seatTypesRepository;


    @GetMapping("")
    public DataResponse<List<Rooms>> findAll(){
        List<Rooms> roomsList = this.roomsRepository.findAll();
        return new DataResponse<>(true,"Thành công",roomsList);
    }

    @GetMapping("/{id}")
    public DataResponse<Rooms> findById(@PathVariable("id") Integer id){
        Rooms rooms = this.roomsRepository.findById(id).get();
        return new DataResponse<>(true,"Success",rooms);
    }

    @PostMapping("")
    public DataResponse<Rooms> create(@RequestBody Rooms rooms){
        return new DataResponse<>(true,"Thêm mới phòng thành công",roomsRepository.save(rooms));
    }

    @PostMapping("/create")
    public DataResponse<Rooms> createRowSeat(@RequestBody RoomRequest roomRequest){
        return new DataResponse<>(true,"Lưu thay đổi thành công",roomService.createRoom(roomRequest));
    }

    @PutMapping("")
    public DataResponse<Rooms> update(@RequestBody Rooms rooms){
        return new DataResponse<>(true,"Cập nhật thông tin phòng thành công",roomService.updateRoom(rooms));
    }

    @PutMapping("/active-or-inactive")
    public DataResponse<Rooms> activeOrInactive(@RequestBody Rooms rooms){
        return new DataResponse<>(true, "Thay đổi trạng thái thành công", this.roomService.activeOrInactive(rooms));
    }

    @PutMapping("/change-seat-type/{seatId}")
    public DataResponse<Seats> changeSeatType(@RequestBody SeatTypes seatTypes, @PathVariable("seatId") Integer seatId){
        return new DataResponse<>(true,"Đổi loại ghế thành công",this.seatService.changeSeatType(seatId,seatTypes));
    }

    @GetMapping("/seat-type")
    public DataResponse<List<SeatTypes>> allSeatType(){
        return new DataResponse<>(true, "Thành công", this.seatTypesRepository.findAll());
    }

    @GetMapping("/remove-all/{roomId}")
    public DataResponse<List<SeatRows>> removeAll(@PathVariable("roomId") Integer roomId){
        return new DataResponse<>(true,"Xóa tất cả ghế thành công",this.rowService.removeRowByRoom(roomId));
    }
}
