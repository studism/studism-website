import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumb({ items }) {
  return (
    <div style={{ fontSize: '0.8rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px', flexWrap: 'wrap' }}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: '#CBD5E1' }}>/</span>}
          {item.to ? (
            <Link to={item.to} style={{ color: '#2563EB', textDecoration: 'none' }}>{item.label}</Link>
          ) : item.onClick ? (
            <button onClick={item.onClick} style={{ color: '#2563EB', background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', textDecoration: 'none' }}>{item.label}</button>
          ) : (
            <span>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
