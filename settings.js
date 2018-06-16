export default {
    urls: {
        login: 'https://theacademist.herokuapp.com/api/v1/user/login',
        get_user: 'https://theacademist.herokuapp.com/api/v1/user/{user_id}',
        register: 'https://theacademist.herokuapp.com/api/v1/user/register',
        update_user: 'https://theacademist.herokuapp.com/api/v1/user/{user_id}',
        forgot: 'https://theacademist.herokuapp.com/api/v1/user/forgot-password',
        update_password: 'https://cardpayment.herokuapp.com/api/v1/user/update-password',
        stripe_pay: 'https://theacademist.herokuapp.com/services/stripe_pay/{user_id}',
        paypal_pay: 'https://theacademist.herokuapp.com/services/paypal/{user_id}',
        list_transactions: 'https://theacademist.herokuapp.com/api/v1/transaction/list/{user_id}',
        scholarship_search: 'https://theacademist.herokuapp.com/api/v1/scholarship/search',
        get_scholarship: 'https://theacademist.herokuapp.com/api/v1/scholarship/{scholarship_id}',
        save_scholarship: 'https://theacademist.herokuapp.com/api/v1/scholarship/save/{user_id}',
        delete_scholarship: 'https://theacademist.herokuapp.com/api/v1/scholarship/{scholarship_id}',
        no_coin: 'https://theacademist.herokuapp.com/api/v1/scholarship/no-coin',
        major_search: 'https://theacademist.herokuapp.com/api/v1/school/search-by-major',
        gpa_search: 'https://theacademist.herokuapp.com/api/v1/school/search-by-gpa',
        get_forum: 'https://theacademist.herokuapp.com/api/v1/forum',
        new_forum: 'https://theacademist.herokuapp.com/api/v1/forum',
        get_singleforum: 'https://theacademist.herokuapp.com/api/v1/forum/{forum_id}',
        show_info: 'https://theacademist.herokuapp.com/api/v1/user/show-info/{user_id}',
        new_reply: 'https://theacademist.herokuapp.com/api/v1/reply',
        new_blog: 'https://theacademist.herokuapp.com/api/v1/blog',
        get_blog: 'https://theacademist.herokuapp.com/api/v1/blog?offset={off}',
        get_singleblog: 'https://theacademist.herokuapp.com/api/v1/blog/{blog_id}',
        new_comment: 'https://theacademist.herokuapp.com/api/v1/comment',
        upload: 'https://theacademist.herokuapp.com/services/aws-signed-url',
        get_referrals: 'https://theacademist.herokuapp.com/api/v1/user/referral/{user_id}'
    }
};