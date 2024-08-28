import React from 'react';
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <section>
      <table>
        <tbody>
          <tr>
            <td className="w"><FaChessRook /></td>
            <td className="d"><FaChessKnight /></td>
            <td className="w"><FaChessBishop /></td>
            <td className="d"><FaChessQueen /></td>
            <td className="w"><FaChessKing /></td>
            <td className="d"><FaChessBishop /></td>
            <td className="w"><FaChessKnight /></td>
            <td className="d"><FaChessRook /></td>
          </tr>
          <tr>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
          </tr>
          <tr>
            <td className="w"></td>
            <td className="d"></td>
            <td className="w"></td>
            <td className="d"></td>
            <td className="w"></td>
            <td className="d"></td>
            <td className="w"></td>
            <td className="d"></td>
          </tr>
          <tr>
            <td className="d"></td>
            <td className="w"></td>
            <td className="d"></td>
            <td className="w"></td>
            <td className="d"></td>
            <td className="w"></td>
            <td className="d"></td>
            <td className="w"></td>
          </tr>
          <tr>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
            <td className="w"><FaChessPawn /></td>
            <td className="d"><FaChessPawn /></td>
          </tr>
          <tr>
            <td className="d"><FaChessRook /></td>
            <td className="w"><FaChessKnight /></td>
            <td className="d"><FaChessBishop /></td>
            <td className="w"><FaChessQueen /></td>
            <td className="d"><FaChessKing /></td>
            <td className="w"><FaChessBishop /></td>
            <td className="d"><FaChessKnight /></td>
            <td className="w"><FaChessRook /></td>
          </tr>
          </tbody>
      </table>
    </section>
  );
}

export default App;