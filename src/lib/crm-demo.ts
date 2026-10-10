// A browser-only teaching model. No production data, storage or network access.
export type DemoNote = { id: string; version: number; text: string };
export type DemoState = { step: number; note: DemoNote | null; revisions: DemoNote[] };
export const initialDemo = (): DemoState => ({ step: 0, note: null, revisions: [] });
export function advanceDemo(state: DemoState, notes: string[]): DemoState {
  if (state.step >= 5) return state;
  const step = state.step + 1;
  // A replay and a rejected stale update leave the accepted record untouched.
  if (step === 2 || step === 4) return { ...state, step };
  const version = step === 1 ? 1 : step === 3 ? 2 : 3;
  const note = { id: 'note-demo-001', version, text: notes[version - 1] };
  return { step, note, revisions: [...state.revisions, note] };
}
