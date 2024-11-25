import { PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  onRowClick?: (data: SchedulerProjectData, resourceIndex: number) => void;
};

export type StyledSpanProps = {
  position: "left" | "right";
};
