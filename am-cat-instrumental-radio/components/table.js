import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { supabase } from "../client";
import styles from "../styles/TableRadioStations.module.css";

const TableRadioStations = () => {
  const [radios, setRadios] = useState([]);
  const [streamUrl, setStreamUrl] = useState("https://streaming.radio.co/s5c5da6a36/listen");


  async function getRadioStations() {
    const { data } = await supabase.from("radio").select();
    setRadios(data);
  }

  getRadioStations();
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">radio</th>
            <th scope="col">homepage</th>
            <th scope="col">label</th>
            <th scope="col">ouvir</th>
          </tr>
        </thead>
        <tbody>
          {radios.map((radio) => (
            <tr>
              <td scope="row" data-label="radio">
                {radio.name_radio}
              </td>
              <td data-label="homepage">{radio.url_radio_homepage}</td>
              <td data-label="label">{radio.label}</td>
              <td className={styles.playerTable} data-label="ouvir" onClick={() => setStreamUrl(radio.url_radio_live)}>▶</td>
            </tr>
          ))}
        </tbody>
      </table>
      <AudioPlayer
        className="player"
        src={streamUrl}
        showJumpControls={false}
        layout="stacked"
        customProgressBarSection={[]}
        customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
        autoPlayAfterSrcChange={true}
      />
    </div>
  );
};

export default TableRadioStations;
