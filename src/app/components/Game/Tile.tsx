import { memo } from "react";
import { STile } from "../../types/types";

const tileStyles = {
  GRASS:
    "bg-emerald-800 bg-[url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='%23065f46'/%3E%3Cpath d='M30 20c-2 4-4 2-6 6-2 4 0 6-2 8-2 2-4 0-4 4s4 4 6 2c2-2 2-6 4-8 2-2 4 0 6-4 2-4-2-6-4-8z' fill='%23064e3b' fill-opacity='.3'/%3E%3C/svg%3E\")] bg-repeat",
  WATER:
    "bg-blue-600 bg-[url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%232563eb' fill-opacity='.3' d='M0 0h100v100H0z'/%3E%3Cpath d='M10 10c20 0 40 40 60 40s20-40 40-40' stroke='%231d4ed8' stroke-width='2' fill='none' stroke-opacity='.4'%3E%3Canimate attributeName='d' dur='5s' repeatCount='indefinite' values='M10 10c20 0 40 40 60 40s20-40 40-40;M10 50c20 0 40-40 60-40s20 40 40 40;M10 10c20 0 40 40 60 40s20-40 40-40'/%3E%3C/path%3E%3C/svg%3E\")] animate-pulse",
  SAND: "bg-yellow-100 bg-[url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='%23fef3c7'/%3E%3Cpath d='M5 5h1v1H5zm9 9h1v1h-1zm-9 0h1v1H5zm9-9h1v1h-1zm-5 4h2v2h-2z' fill='%23fde68a' fill-opacity='.4'/%3E%3C/svg%3E\")]",
  MOUNTAIN:
    "bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800 bg-[url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10l16 16 16-16M10 0l16 16 16-16' stroke='%2344403c' stroke-width='2' fill='none' fill-opacity='.1'/%3E%3C/svg%3E\")]",
  FOREST:
    "bg-emerald-900 bg-[url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 0l12 16H4z' fill='%23064e3b' fill-opacity='.4'/%3E%3Cpath d='M16 32l12-16H4z' fill='%23065f46' fill-opacity='.4'/%3E%3C/svg%3E\")]",
  ROAD: "bg-stone-600 bg-[url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='%2357534e'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%2378716c' stroke-width='1' stroke-dasharray='2,2'/%3E%3C/svg%3E\")]",
  WALL: "bg-stone-800 border-t-2 border-stone-700 bg-[url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0zm20 20h20v20H20z' fill='%2344403c' fill-opacity='.1'/%3E%3C/svg%3E\")]",
  STAIRS_UP:
    "bg-gradient-to-tr from-stone-800 to-stone-600 bg-[url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40h40v-5H5v-5h35v-5H10v-5h30v-5H15v-5h25V5H20V0h20' fill='none' stroke='%2357534e' stroke-opacity='.2'/%3E%3C/svg%3E\")]",
  STAIRS_DOWN:
    "bg-gradient-to-br from-stone-600 to-stone-800 bg-[url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v5H5v5h35v5H10v5h30v5H15v5h25v5H20v5h20' fill='none' stroke='%2357534e' stroke-opacity='.2'/%3E%3C/svg%3E\")]",
  CAVE_WALL:
    "bg-stone-900 border-t-2 border-stone-800 bg-[url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c10 0 10 10 20 10s10-10 20-10s10 10 20 10s10-10 20-10v20c-10 0-10 10-20 10s-10-10-20-10s-10 10-20 10s-10-10-20-10zM0 40c10 0 10 10 20 10s10-10 20-10s10 10 20 10s10-10 20-10' fill='none' stroke='%2344403c' stroke-width='2' stroke-opacity='.1'/%3E%3C/svg%3E\")]",
  CHEST:
    "bg-amber-900 bg-[url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' fill='%23b45309' fill-opacity='.2'/%3E%3Cpath d='M8 8h16v16H8z' stroke='%23f59e0b' stroke-width='2' fill='none' stroke-opacity='.3'/%3E%3C/svg%3E\")]",
  DOOR: "bg-amber-800 bg-[url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' fill='%23b45309'/%3E%3Cpath d='M6 4h20v24H6z' fill='%23d97706' fill-opacity='.3'/%3E%3Ccircle cx='24' cy='16' r='2' fill='%23f59e0b'/%3E%3C/svg%3E\")]",
  DOORWAY:
    "bg-stone-800/50 bg-[url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h32v32H0z' fill='%2344403c' fill-opacity='.1'/%3E%3Cpath d='M8 0v32M24 0v32' stroke='%2357534e' stroke-width='2' stroke-opacity='.2'/%3E%3C/svg%3E\")]",
  CONTAINER: "bg-stone-800/50",
  WOODEN_FLOOR:
    "bg-amber-800 bg-[url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v5H0zm0 10h40v5H0zm0 10h40v5H0zm0 10h40v5H0z' fill='%23b45309' fill-opacity='.2'/%3E%3C/svg%3E\")]",
  STORAGE: "bg-stone-800/50",
  TREE: "bg-emerald-900/50",
  ROCK: "bg-stone-800/50",
  HOUSE: "bg-stone-800/50",
  FENCE: "bg-stone-800/50",
  WALL_CORNER: "bg-stone-800/50",
  WALL_EDGE: "bg-stone-800/50",
  WALL_EDGE_INNER: "bg-stone-800/50",
  PORTAL:
    "bg-violet-900 bg-[url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='16' fill='none' stroke='%238b5cf6' stroke-width='2'%3E%3Canimate attributeName='r' values='16;18;16' dur='2s' repeatCount='indefinite'/%3E%3C/circle%3E%3C/svg%3E\")] animate-pulse",
  SIGN: "bg-stone-800/50",
  SHRINE: "bg-stone-800/50",
  WEAPON: "bg-stone-800/50",
  ARMOR: "bg-stone-800/50",
  ACCESSORY: "bg-stone-800/50",
  ITEM: "bg-stone-800/50",
  CONSUMABLE: "bg-stone-800/50",
  QUEST_ITEM: "bg-stone-800/50",
  CURRENCY: "bg-stone-800/50",
  FURNITURE: "bg-stone-800/50",
  CRAFTING_STATION: "bg-stone-800/50",
  DECORATION: "bg-stone-800/50",
  LEVER: "bg-stone-800/50",
  BUTTON: "bg-stone-800/50",
  TRAP: "bg-stone-800/50",
  LIGHT_SOURCE: "bg-amber-400/30 animate-pulse",
  FIRE: "bg-orange-600 bg-[url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 4c-2 8-8 10-8 16 0 4 4 8 8 8s8-4 8-8c0-6-6-8-8-16z' fill='%23ea580c'%3E%3Canimate attributeName='d' dur='1s' repeatCount='indefinite' values='M16 4c-2 8-8 10-8 16 0 4 4 8 8 8s8-4 8-8c0-6-6-8-8-16z;M16 4c-3 8-8 11-8 16 0 4 4 8 8 8s8-4 8-8c0-5-5-8-8-16z'/%3E%3C/path%3E%3C/svg%3E\")] animate-pulse",
  LAMP: "bg-yellow-200/30 animate-pulse",
};

const Tile = memo(
  ({
    tile,
    isPlayer,
    className,
  }: {
    tile: STile | null;
    isPlayer: boolean;
    className: string;
  }) => {
    if (!tile) {
      return <div className={`${className} relative`} />;
    }

    const tileType = tile.objects?.[0]?.object.type || tile.type;
    const tileStyle = tileStyles[tileType] || "bg-stone-800 bg-opacity-50";

    return (
      <div
        className={`
          ${className} 
          ${tileStyle}
          relative 
          ${isPlayer ? "after:absolute after:inset-0 after:bg-blue-400 after:rounded-full after:w-3 after:h-3 after:m-auto" : ""}
        `}
      />
    );
  }
);

Tile.displayName = "Tile";

export default Tile;
