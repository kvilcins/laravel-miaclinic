<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Page
 * 
 * @property int $id
 * @property int|null $parent_id
 * @property string|null $lineage
 * @property int|null $v_parent_id
 * @property string|null $v_lineage
 * @property int|null $template_id
 * @property string|null $wallpaper
 * @property string|null $uuid
 * @property string $title
 * @property string $h1
 * @property string|null $in_menu_name
 * @property string|null $in_bc_name
 * @property string $description
 * @property string|null $body
 * @property string|null $meta
 * @property bool $published
 * @property bool $indexed
 * @property bool $important
 * @property bool $lock_slug
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Page|null $page
 * @property Template|null $template
 * @property Employee $employee
 * @property Offer $offer
 * @property Collection|Page[] $pages
 * @property Profession $profession
 * @property Collection|Service[] $services
 * @property Work $work
 * @property Collection|Work[] $works
 *
 * @package App\Models
 */
class Page extends Model
{
	protected $table = 'pages';

	protected $casts = [
		'parent_id' => 'int',
		'v_parent_id' => 'int',
		'template_id' => 'int',
		'published' => 'bool',
		'indexed' => 'bool',
		'important' => 'bool',
		'lock_slug' => 'bool'
	];

	protected $fillable = [
		'parent_id',
		'lineage',
		'v_parent_id',
		'v_lineage',
		'template_id',
		'wallpaper',
		'uuid',
		'title',
		'h1',
		'in_menu_name',
		'in_bc_name',
		'description',
		'body',
		'meta',
		'published',
		'indexed',
		'important',
		'lock_slug'
	];

	public function page()
	{
		return $this->belongsTo(Page::class, 'parent_id');
	}

	public function template()
	{
		return $this->belongsTo(Template::class);
	}

	public function employee()
	{
		return $this->hasOne(Employee::class);
	}

	public function offer()
	{
		return $this->hasOne(Offer::class);
	}

	public function pages()
	{
		return $this->hasMany(Page::class, 'parent_id');
	}

	public function profession()
	{
		return $this->hasOne(Profession::class);
	}

	public function services()
	{
		return $this->hasMany(Service::class);
	}

	public function work()
	{
		return $this->hasOne(Work::class);
	}

	public function works()
	{
		return $this->hasMany(Work::class, 'section_page_id');
	}
}
