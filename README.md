В проекте можно добавлять,редактировать и удалять задачи на день.<br>
Если время задачи истекло, задача загорается красным.Дальнейшее редактирование,этого не изменит.Посчитал,что так будет правильно.Если указать задачу без времени,также загорится красным.<br>
Если время до выполнения осталось,его можно изменить и новое время добавится в состояние и в useEffect.Будет проверяться по новому времени<br>
Время в проекте проверяется раз в 3 секунды.Если время стоит до 15:00,в 15:01 загорится красным.Включительно не делал.<br>
Можно отметить галочкой,задача загорится зеленым.<br>
Редактирование происходит в карточке задачи.
