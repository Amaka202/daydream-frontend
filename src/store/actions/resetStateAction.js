export const RESET_AUTH_STATE = "RESET_AUTH_STATE";
export const RESET_ENTRIES_STATE = "RESET_ENTRIES_STATE";
export const RESET_REMINDERS_STATE = "RESET_REMINDERS_STATE";

export const resetAuthState = () => ({
    type: RESET_AUTH_STATE
});

export const resetEntriesState = () => ({
    type: RESET_ENTRIES_STATE
});

export const resetRemindersState = () => ({
    type: RESET_REMINDERS_STATE
});