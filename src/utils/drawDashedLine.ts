import { headerHeight } from "@/constants";
import { theme } from "@/styles";

export const drawDashedLine = (
  ctx: CanvasRenderingContext2D,
  startPos: number,
  lineLength: number
) => {
  ctx.setLineDash([5, 5]);
  ctx.strokeStyle = theme.colors.grey;

  ctx.moveTo(startPos + 0.5, headerHeight + 0.5);
  ctx.lineTo(startPos + 0.5, lineLength + 0.5);
  ctx.stroke();
};