import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Lesson {
  id: string;
  title: string;
  sectionId: string;
  isCompleted: boolean;
}

export interface LessonsState {
  lessons: Record<string, Lesson>;
  currentLessonId: string | null;
}

const initialState: LessonsState = {
  lessons: {},
  currentLessonId: null,
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    // Initialize lessons for a course
    initializeLessons: (state, action: PayloadAction<Lesson[]>) => {
      action.payload.forEach((lesson) => {
        state.lessons[lesson.id] = lesson;
      });
    },

    // Mark a lesson as complete
    markLessonComplete: (state, action: PayloadAction<string>) => {
      const lessonId = action.payload;
      if (state.lessons[lessonId]) {
        state.lessons[lessonId].isCompleted = true;
      }
    },

    // Mark a lesson as incomplete
    markLessonIncomplete: (state, action: PayloadAction<string>) => {
      const lessonId = action.payload;
      if (state.lessons[lessonId]) {
        state.lessons[lessonId].isCompleted = false;
      }
    },

    // Toggle lesson completion
    toggleLessonCompletion: (state, action: PayloadAction<string>) => {
      const lessonId = action.payload;
      if (state.lessons[lessonId]) {
        state.lessons[lessonId].isCompleted = !state.lessons[lessonId].isCompleted;
      }
    },

    // Set current lesson
    setCurrentLesson: (state, action: PayloadAction<string>) => {
      state.currentLessonId = action.payload;
    },

    // Clear all lessons
    clearLessons: (state) => {
      state.lessons = {};
      state.currentLessonId = null;
    },
  },
});

export const {
  initializeLessons,
  markLessonComplete,
  markLessonIncomplete,
  toggleLessonCompletion,
  setCurrentLesson,
  clearLessons,
} = lessonsSlice.actions;

export default lessonsSlice.reducer;
