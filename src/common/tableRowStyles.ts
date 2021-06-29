export const tableRowStyles = (index: number ): React.CSSProperties => {
  return {
    background: index % 2 === 0 ? "#fafafa" : "#ffffff",
  }
};