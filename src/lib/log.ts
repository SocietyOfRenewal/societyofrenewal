type LogLevel = "debug" | "info" | "warn" | "error";

interface LogPayload {
  level: LogLevel;
  event: string;
  message?: string;
  data?: Record<string, unknown>;
}

export function logStructured(payload: LogPayload) {
  const { level, event, message, data } = payload;
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    event,
    message,
    ...data,
  };

  const serialized = JSON.stringify(entry);

  switch (level) {
    case "error":
      console.error(serialized);
      break;
    case "warn":
      console.warn(serialized);
      break;
    case "debug":
      console.debug(serialized);
      break;
    default:
      console.info(serialized);
      break;
  }
}
