import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import EventList from "../components/EventList";


export default function Top(){
  // 三つのリスト取得
  // 近日開催イベントリスト
  // ホットイベント一覧
  // ホットグループ一覧
  return (
    <>
      <EventList title="イベント一覧" list={[]} />
      <EventList title="ホットイベント一覧" list={[]} />
    </>
  )
  }
