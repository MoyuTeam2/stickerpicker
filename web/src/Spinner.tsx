// maunium-stickerpicker - A fast and simple Matrix sticker picker widget.
// Copyright (C) 2020 Tulir Asokan
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import React from 'preact/compat';

export const Spinner = ({ size = 40, noCenter = false, noMargin = false, green = false }) => {
	let margin = 0;
	let sizePx: number | string = typeof size === 'number' ? size : parseInt(size, 10);

	if (!isNaN(sizePx)) {
		margin = noMargin ? 0 : Math.round(sizePx / 6);
		sizePx = `${sizePx}px`;
	}
	const noInnerMargin = !noCenter || margin === 0;
	const comp = (
		<div style={{ width: sizePx, height: sizePx, margin: noInnerMargin ? 0 : `${margin}px 0` }}
			className={`sk-chase ${green ? 'green' : ''}`}>
			<div className="sk-chase-dot" />
			<div className="sk-chase-dot" />
			<div className="sk-chase-dot" />
			<div className="sk-chase-dot" />
			<div className="sk-chase-dot" />
			<div className="sk-chase-dot" />
		</div>
	);
	if (!noCenter) {
		return <div style={{ margin: `${margin}px 0` }} className="sk-center-wrapper">{comp}</div>;
	}
	return comp;
};
