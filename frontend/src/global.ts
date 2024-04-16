// Allow Window.configuration from config endpoint.
interface Window {
  configuration: Record<string, unknown>;
}
