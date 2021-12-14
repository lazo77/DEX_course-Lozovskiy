import React, { FC } from "react";
import "./styles.css";
import 'normalize.css';
import { Match } from "./components/match";
import ural from './img/ural.png';
import cska from './img/cska.png';
import dinamo from './img/dinamo.png';
import locomotiv from './img/locomotiv.png';
import spartak from './img/spartak.png';
import sochi from './img/sochi.png';

export default function App() {
  return (
    <div className="shadow">
      <section className={"section1"}>
        <div className={"wrapper"}>
          <Match
            matchClassList={"match past"}
            header={'1-й тур | Тинькофф РПЛ'}
            teams={[
              { teamName: 'урал', imgUrl: ural },
              { teamName: 'сочи', imgUrl: sochi }
            ]}
            downText={{
              downDate: '3 июля, 19:00',
              downPlace: 'Екатеренбург Арена'
            }}
          />
          <Match
            matchClassList={"match actual"}
            header={'1-й тур | Тинькофф РПЛ'}
            teams={[
              { teamName: 'спартак', imgUrl: spartak },
              { teamName: 'локомотив', imgUrl: locomotiv }
            ]}
            downText={{
              downDate: '19 июля, 19:00',
              downPlace: 'Открытие Банк Арена'
            }}
          />
          <Match
            matchClassList={"match ahead"}
            header={'1-й тур | Тинькофф РПЛ'}
            teams={[
              { teamName: 'цска', imgUrl: cska },
              { teamName: 'динамо', imgUrl: dinamo }
            ]}
            downText={{
              downDate: '24 июля, 19:00',
              downPlace: 'ВЭБАрена'
            }}
          />
        </div>
      </section>
    </div>
  );
}
