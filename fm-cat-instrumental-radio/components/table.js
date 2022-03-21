import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { supabase } from "../client";
import styles from "../styles/TableRadioStations.module.css";

const TableRadioStations = () => {
  const [radios, setRadios] = useState([]);
  const [streamUrl, setStreamUrl] = useState(
    "https://streaming.radio.co/s5c5da6a36/listen"
  );
  const [radioId, setRadioId] = useState("");

  async function getRadioStations() {
    const { data } = await supabase.from("radio").select();
    setRadios(data);
  }

  useEffect(() => getRadioStations(), []);

  async function playRadio(id, streamUrl) {
    await supabase.from("radio").select().eq("id", id);
    setRadioId(id);
    setStreamUrl(streamUrl);
  }

  return (
    <div>
      <table>
        <caption className={styles.title}>
          _instrumental radio stations [ jazz, ambient, chillout & nature ]{" "}
        </caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">radio</th>
            <th scope="col">label</th>
            <th scope="col">play</th>
          </tr>
        </thead>
        <tbody>
          {radios.map((radio, index) => (
            <tr key={radio.id}>
              <td data-label="#">{(index += 1)}</td>
              <td scope="row" data-label="radio">
                {radio.name_radio}
              </td>
              <td data-label="label">{radio.label}</td>
              <td
                className={styles.playerTable}
                data-label="play"
                style={{ color: radioId == radio.id ? "#f77f00" : "black" }}
              >
                <span
                  tabindex={(index += 1)}
                  onClick={() => playRadio(radio.id, radio.url_radio_live)}
                >
                  ▶
                </span>
              </td>
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
