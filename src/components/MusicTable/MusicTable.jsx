import React from "react";


const MusicTable = (props) => {
    const {songs} = props
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Genre</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => {
                        return (
                        <tr key={index}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>{song.releaseDate}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default MusicTable 