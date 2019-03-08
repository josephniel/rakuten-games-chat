from typing import Callable, List, NamedTuple


class ClassRoute(NamedTuple):
    location: str
    view_func: Callable


ROUTES: List[ClassRoute] = []


def route(location: str, name: str):
    def wrapper(cls):
        ROUTES.append(
            ClassRoute(
                location=location,
                view_func=cls.as_view(name)
            )
        )
        return cls
    return wrapper
