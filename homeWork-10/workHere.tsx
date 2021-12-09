import React, { FC, useCallback, useEffect, useState } from "react";
import { fetchProjects, fetchTotos } from "./mocks/mockFetcher";
import { IProject, ITodo } from "./types";

// Реализуйте хук для получения проектов, используя
// асинхронную функцию fetchProjects. Дайте пользователю
// знать, что происходит загрузка

type loadedData<T> = {
  isLoading: boolean;
  content: T;
};

const useProjects = (): loadedData<IProject[]> => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState<IProject[]>([]);

  useEffect(() => {
    let result: IProject[];
    const getProj = async () => {
      await fetchProjects().then((res) => (result = res));
      setContent(result);
      setIsLoading(false);
    };
    getProj();
    // setIsLoading((isLoading) => !isLoading);
  }, []);
  return {
    isLoading: isLoading,
    content: content
  };
};

// Реализуйте хук для получения todo проектов, используя
// асинхронную функцию fetchTotos. Дайте пользователю
// знать, что происходит загрузка. Реализуйте функцию
// удаления записи todo. Избегайте повторной загрузки
// данных — это сбросит удалённые элементы списка

type deletableLoadedTata<T> = loadedData<T> & {
  remove: (todoId: number) => void;
};

const useTodos = (projectId: number | null): deletableLoadedTata<ITodo[]> => {
  const [isLoadingTodo, setIsLoadingTodo] = useState(true);
  const [todo, setTodo] = useState<ITodo[]>([]);
   useEffect(() => {
    let resTodo: ITodo[];
    const getTodo = async () => {
      await fetchTotos(projectId === null ? 0 : projectId)
        .then((res) => (resTodo = res))
        .then(() => setIsLoadingTodo(false))
        .then(() => setTodo(resTodo));
    };
     getTodo()
  }, [projectId]);
  return {
    isLoading: isLoadingTodo,
    content: todo,
    remove: (todoId: number) => {
      setTodo(todo.filter((item) => item.id !== todoId));
    }
  };
};

// Допишите компонент фильтра. При нажатии на кнопку "поиск"
// необходимо вызвать onFilter из свойств компонента.
// Дополнительной задачей является минимизация количества
// обновлений компонента (вывод "FilterComponent render" в
// консоль должен быть минимальным)

type FilterProps = {
  onFilter: (search: string) => void;
};

const FilterComponent: FC<FilterProps> = ({ onFilter }) => {
  console.log("FilterComponent render");
  const [search, setSearch] = useState('');
  return (
    <div>
      Фильтр:&nbsp;
      <input onChange={useCallback(e => setSearch(e.target.value),[])}/>
      <button onClick={useCallback(() => onFilter(search),[onFilter, search])}>поиск</button>
    </div>
  );
};

export { useProjects, useTodos, FilterComponent };