import json

MENU_ID = 0
list_of_menus = []


def create_options(all_options):
    options = []
    for option in all_options:
        options.append(
            {
                'id': option[0],
                'text': option[1]
            }
        )
    return options


def create_menu_obj(menu_data):
    global MENU_ID
    MENU_ID += 1
    return {
        'id': MENU_ID,
        'menu_title': menu_data[0],
        'details': menu_data[1],
        'options': create_options(menu_data[2])
    }


def menu_maker():
    setup_step = 0
    current_menu = []
    current_options = []
    option_id = 0
    while True:
        if setup_step == 0:
            user_input = input("Input the Menu Title\n")
            current_menu.append(user_input)
            setup_step += 1

        if setup_step == 1:
            user_input = input("Input the Menu Details\n")
            current_menu.append(user_input)
            setup_step += 1

        if setup_step == 2:
            user_input = input("Input Option link ID: (the id this option leads to)\n")
            # current_options.append(user_input)
            option_id = user_input
            setup_step += 1

        if setup_step == 3:
            user_input = input("Input Option text\n")
            current_options.append([option_id, user_input])
            option_id = 0
            setup_step += 1

        if setup_step == 4:
            user_input = input("Create another option? y/n\n")

            if user_input == 'y' or user_input == 'Y':
                setup_step = 2

            if user_input == 'n' or user_input == 'N':
                current_menu.append(current_options)
                current_options = []
                setup_step += 1

        if setup_step == 5:
            user_input = input('Create another menu, or compile the file?\n')
            if user_input == 'y' or user_input == 'Y':
                setup_step = 0

            if user_input == 'n' or user_input == 'N':
                list_of_menus.append(create_menu_obj(current_menu))
                with open('data.json', 'w', encoding='utf-8') as f:
                    json.dump(list_of_menus, f, ensure_ascii=False, indent=4)
                    exit()


menu_maker()
